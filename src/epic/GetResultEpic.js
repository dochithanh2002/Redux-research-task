import { Observable } from "rxjs";
import { GET_RESULT } from "../constants/ActionTypes";
import { getResultSuccess } from "../actions/GetResultActions";
import { combineEpics } from "redux-observable";
/**
 * Get result epic
 * @param action$
 * @returns {Observable<any>}
 */
function GetResultEpic(action$) {
  return action$.ofType(GET_RESULT).mergeMap((action) =>
    Observable.from(
      new Promise((resolve, reject) => {
        fetch("http://localhost/test2/pub/rest/V1/showproduct/simple", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
        })
          .then((response) =>
            response.json().then(function (data) {
              if (response.ok) {
                console.log(data);
                return resolve(data);
              } else {
                return reject(data);
              }
            })
          )
          .catch(() => reject(""));
      })
    )
      .mergeMap((response) => {
        return [getResultSuccess(response)];
      })
      .catch(() => {
        return Observable.empty();
      })
  );
}

export const getResultEpic = combineEpics(GetResultEpic);

export default getResultEpic;
