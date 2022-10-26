import {combineEpics} from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import getResultEpic from "./GetResultEpic";

export default () => {
    const epic$ = new BehaviorSubject(combineEpics(
        getResultEpic
    ));

    const rootEpic = (action$, store) =>
        epic$.mergeMap(epic =>
            epic(action$, store)
        );

    return rootEpic
}
