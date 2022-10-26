// React
import React, { Fragment, Component } from "react";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as GetResultActions from "../actions/GetResultActions";

import "./GetResult.css";

// import pagination lib
import PaginatedItems from "./PaginatedItems";

class GetResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            name: "",
            price: "",
            image: "",
        };
    }

    refreshList() {
        // fetch("http://localhost/test2/pub/rest/V1/showproduct/simple", {
        //     method: "GET",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     mode: "cors",
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         this.setState({ films: data });
        //     });

        this.setState({
            films: [
                {
                    entity_id: "1",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-MB01",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:51",
                    updated_at: "2022-08-31 18:09:51",
                    description:
                        '<p>The sporty Joust Duffle Bag can\'t be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare, it\'s ideal for athletes with places to go.<p>\n<ul>\n<li>Dual top handles.</li>\n<li>Adjustable shoulder strap.</li>\n<li>Full-length zipper.</li>\n<li>L 29" x W 13" x H 11".</li>\n</ul>',
                    status: "1",
                    visibility: "4",
                    price: "34.000000",
                    name: "Joust Duffle Bag",
                    image: "/m/b/mb01-blue-0.jpg",
                    small_image: "/m/b/mb01-blue-0.jpg",
                    thumbnail: "/m/b/mb01-blue-0.jpg",
                    url_key: "joust-duffle-bag",
                    store_id: 1,
                },
                {
                    entity_id: "2",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-MB04",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:52",
                    updated_at: "2022-08-31 18:09:52",
                    description:
                        "<p>Convenience is next to nothing when your day is crammed with action. So whether you're heading to class, gym, or the unbeaten path, make sure you've got your Strive Shoulder Pack stuffed with all your essentials, and extras as well.</p>\n<ul>\n<li>Zippered main compartment.</li>\n<li>Front zippered pocket.</li>\n<li>Side mesh pocket.</li>\n<li>Cell phone pocket on strap.</li>\n<li>Adjustable shoulder strap and top carry handle.</li>\n</ul>",
                    activity: "11,21,23,18",
                    style_bags: "27,29,30",
                    material: "32,33,36,38",
                    strap_bags: "61,62,65,66,67",
                    features_bags: "72,74,75,78",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    erin_recommends: "1",
                    sale: "1",
                    price: "32.000000",
                    special_price: "32.000000",
                    name: "Strive Shoulder Pack",
                    image: "/m/b/mb04-black-0.jpg",
                    small_image: "/m/b/mb04-black-0.jpg",
                    thumbnail: "/m/b/mb04-black-0.jpg",
                    options_container: "container2",
                    url_key: "strive-shoulder-pack",
                    msrp_display_actual_price_type: "0",
                    special_from_date: "2022-08-31 00:00:00",
                    store_id: 1,
                },
                {
                    entity_id: "3",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-MB03",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:53",
                    updated_at: "2022-08-31 18:09:53",
                    description:
                        '<p>The Crown Summit Backpack is equally at home in a gym locker, study cube or a pup tent, so be sure yours is packed with books, a bag lunch, water bottles, yoga block, laptop, or whatever else you want in hand. Rugged enough for day hikes and camping trips, it has two large zippered compartments and padded, adjustable shoulder straps.</p>\n<ul>\n<li>Top handle.</li>\n<li>Grommet holes.</li>\n<li>Two-way zippers.</li>\n<li>H 20" x W 14" x D 12".</li>\n<li>Weight: 2 lbs, 8 oz. Volume: 29 L.</li>\n<ul>',
                    activity: "11,18,19,20,21,22,23",
                    style_bags: "24",
                    material: "37,38",
                    strap_bags: "61,64,65",
                    features_bags: "72,74,75,77,78",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    price: "38.000000",
                    name: "Crown Summit Backpack",
                    image: "/m/b/mb03-black-0.jpg",
                    small_image: "/m/b/mb03-black-0.jpg",
                    thumbnail: "/m/b/mb03-black-0.jpg",
                    options_container: "container2",
                    url_key: "crown-summit-backpack",
                    msrp_display_actual_price_type: "0",
                    store_id: 1,
                },
                {
                    entity_id: "4",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-MB05",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:53",
                    updated_at: "2022-09-20 03:51:22",
                    description:
                        "<p>Perfect for class, work or the gym, the Wayfarer Messenger Bag is packed with pockets. The dual-buckle flap closure reveals an organizational panel, and the roomy main compartment has spaces for your laptop and a change of clothes. An adjustable shoulder strap and easy-grip handle promise easy carrying.</p>\r\n<ul>\r\n<li>Multiple internal zip pockets.</li>\r\n<li>Made of durable nylon.</li>\r\n</ul>",
                    activity: "11,19,22",
                    style_bags: "27,28",
                    material: "37,38",
                    strap_bags: "61,63,64,65,66",
                    features_bags: "74,75,77,78,79",
                    color: "49",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    eco_collection: "0",
                    performance_fabric: "0",
                    erin_recommends: "0",
                    new: "1",
                    sale: "0",
                    is_feature: "1",
                    price: "45.000000",
                    name: "Wayfarer Messenger Bag",
                    image: "/m/b/mb05-black-0.jpg",
                    small_image: "/m/b/mb05-black-0.jpg",
                    thumbnail: "/m/b/mb05-black-0.jpg",
                    options_container: "container2",
                    image_label: "Image",
                    small_image_label: "Image",
                    thumbnail_label: "Image",
                    url_key: "wayfarer-messenger-bag",
                    msrp_display_actual_price_type: "0",
                    gift_message_available: "0",
                    store_id: 1,
                },
                {
                    entity_id: "5",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-MB06",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:53",
                    updated_at: "2022-08-31 18:09:53",
                    description:
                        '<p>The Rival Field Messenger packs all your campus, studio or trail essentials inside a unique design of soft, textured leather - with loads of character to spare. Two exterior pockets keep all your smaller items handy, and the roomy interior offers even more space.</p>\n<ul>\n<li>Leather construction.</li>\n<li>Adjustable fabric carry strap.</li>\n<li>Dimensions: 18" x 10" x 4".</li>\n</ul>',
                    activity: "22,23",
                    style_bags: "27,28,29",
                    material: "35,37,41",
                    strap_bags: "61,62,66,67",
                    features_bags: "73,75,78",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    new: "1",
                    price: "45.000000",
                    name: "Rival Field Messenger",
                    image: "/m/b/mb06-gray-0.jpg",
                    small_image: "/m/b/mb06-gray-0.jpg",
                    thumbnail: "/m/b/mb06-gray-0.jpg",
                    options_container: "container2",
                    url_key: "rival-field-messenger",
                    msrp_display_actual_price_type: "0",
                    store_id: 1,
                },
                {
                    entity_id: "6",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-MB02",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:54",
                    updated_at: "2022-08-31 18:09:54",
                    description:
                        '<p>With the Fusion Backpack strapped on, every trek is an adventure - even a bus ride to work. That\'s partly because two large zippered compartments store everything you need, while a front zippered pocket and side mesh pouches are perfect for stashing those little extras, in case you change your mind and take the day off.</p>\n<ul>\n<li>Durable nylon construction.</li>\n<li>2 main zippered compartments.</li>\n<li>1 exterior zippered pocket.</li>\n<li>Mesh side pouches.</li>\n<li>Padded, adjustable straps.</li>\n<li>Top carry handle.</li>\n<li>Dimensions: 18" x 10" x 6".</li>\n</ul>',
                    activity: "18,20,8",
                    style_bags: "24,28",
                    material: "31,37,38",
                    strap_bags: "61,64,65",
                    features_bags: "71,72,74,75",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    price: "59.000000",
                    name: "Fusion Backpack",
                    image: "/m/b/mb02-gray-0.jpg",
                    small_image: "/m/b/mb02-gray-0.jpg",
                    thumbnail: "/m/b/mb02-gray-0.jpg",
                    options_container: "container2",
                    url_key: "fusion-backpack",
                    msrp_display_actual_price_type: "0",
                    store_id: 1,
                },
                {
                    entity_id: "7",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-UB02",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:54",
                    updated_at: "2022-08-31 18:09:54",
                    description:
                        '<p>Good for beach trips, track meets, yoga retreats and more, the Impulse Duffle is the companion you\'ll want at your side. A large U-shaped opening makes packing a hassle-free affair, while a zippered interior pocket keeps jewelry and other small valuables safely tucked out of sight.</p>\n<ul>\n<li>Wheeled.</li>\n<li>Dual carry handles.</li>\n<li>Retractable top handle.</li>\n<li>W 14" x H 26" x D 11".</li>\n</ul>',
                    activity: "11,19,22",
                    style_bags: "25,26",
                    material: "37,38",
                    strap_bags: "61,64,68",
                    features_bags: "70,76,79",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    price: "74.000000",
                    name: "Impulse Duffle",
                    image: "/u/b/ub02-black-0.jpg",
                    small_image: "/u/b/ub02-black-0.jpg",
                    thumbnail: "/u/b/ub02-black-0.jpg",
                    options_container: "container2",
                    url_key: "impulse-duffle",
                    msrp_display_actual_price_type: "0",
                    store_id: 1,
                },
                {
                    entity_id: "8",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-WB01",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:54",
                    updated_at: "2022-08-31 18:09:54",
                    description:
                        "<p>Everything you need for a trip to the gym will fit inside this surprisingly spacious Voyage Yoga Bag. Stock it with a water bottle, change of clothes, pair of shoes, and even a few beauty products. Fits inside a locker and zips shut for security.</p>\n<ul>\n<li>Slip pocket on front.</li>\n<li>Contrast piping.</li>\n<li>Durable nylon construction.</li>\n</ul>",
                    activity: "11,8",
                    style_bags: "29,30",
                    material: "37,38",
                    strap_bags: "64,66",
                    features_bags: "74,77,79",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    price: "32.000000",
                    name: "Voyage Yoga Bag",
                    image: "/w/b/wb01-black-0.jpg",
                    small_image: "/w/b/wb01-black-0.jpg",
                    thumbnail: "/w/b/wb01-black-0.jpg",
                    options_container: "container2",
                    url_key: "voyage-yoga-bag",
                    msrp_display_actual_price_type: "0",
                    store_id: 1,
                },
                {
                    entity_id: "9",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-WB02",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:55",
                    updated_at: "2022-08-31 18:09:55",
                    description:
                        '<p>The Compete Track Tote holds a host of exercise supplies with ease. Stash your towel, jacket and street shoes inside. Tuck water bottles in easy-access external spaces. Perfect for trips to gym or yoga studio, with dual top handles for convenience to and from.<p>\n<ul>\n<li>Two-way zippers.</li>\n<li>Contrast detailing.</li>\n<li>W 22.0" x H 17" x D 10".</li>\n</ul>',
                    activity: "11,20,8",
                    style_bags: "29,30",
                    material: "37,38,39",
                    strap_bags: "61,64,66",
                    features_bags: "74,75,77",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    price: "32.000000",
                    name: "Compete Track Tote",
                    image: "/w/b/wb02-green-0.jpg",
                    small_image: "/w/b/wb02-green-0.jpg",
                    thumbnail: "/w/b/wb02-green-0.jpg",
                    options_container: "container2",
                    url_key: "compete-track-tote",
                    msrp_display_actual_price_type: "0",
                    store_id: 1,
                },
                {
                    entity_id: "10",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-WB05",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:55",
                    updated_at: "2022-08-31 18:09:55",
                    description:
                        '<p>Powerwalking to the gym or strolling to the local coffeehouse, the Savvy Shoulder Tote lets you stash your essentials in sporty style! A top-loading compartment provides quick and easy access to larger items, while zippered pockets on the front and side hold cash, credit cards and phone.</p>\n<ul>\n<li>Water-resistant shell.</li>\n<li>Water bottle pocket.</li>\n<li>Padded, articulating shoulder strap.</li>\n<li>Dimensions: W 21" x H 15" x D 10".</li>\n</ul>',
                    activity: "11,8",
                    style_bags: "29,30",
                    strap_bags: "61,62,66,67",
                    features_bags: "72,75",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    erin_recommends: "1",
                    sale: "1",
                    price: "32.000000",
                    special_price: "24.000000",
                    name: "Savvy Shoulder Tote",
                    image: "/w/b/wb05-red-0.jpg",
                    small_image: "/w/b/wb05-red-0.jpg",
                    thumbnail: "/w/b/wb05-red-0.jpg",
                    options_container: "container2",
                    url_key: "savvy-shoulder-tote",
                    msrp_display_actual_price_type: "0",
                    special_from_date: "2022-08-31 00:00:00",
                    store_id: 1,
                },
                {
                    entity_id: "11",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-WB06",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:55",
                    updated_at: "2022-08-31 18:09:55",
                    description:
                        "<p>With more room than it appears, the Endeavor Daytrip Backpack will hold a whole day's worth of books, binders and gym clothes. The spacious main compartment includes a dedicated laptop sleeve. Two other compartments offer extra storage space.</p>\n<ul>\n<li>Foam-padded adjustable shoulder straps.</li>\n<li>900D polyester.</li>\n<li>Oversized zippers.</li>\n<li>Locker loop.</li>\n</ul>",
                    activity: "11,18,20,23",
                    style_bags: "24,28",
                    material: "36,37,38",
                    strap_bags: "61,64,65",
                    features_bags: "72,75,77,78,79",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    erin_recommends: "1",
                    sale: "1",
                    price: "33.000000",
                    special_price: "33.000000",
                    name: "Endeavor Daytrip Backpack",
                    image: "/w/b/wb06-red-0.jpg",
                    small_image: "/w/b/wb06-red-0.jpg",
                    thumbnail: "/w/b/wb06-red-0.jpg",
                    options_container: "container2",
                    url_key: "endeavor-daytrip-backpack",
                    msrp_display_actual_price_type: "0",
                    special_from_date: "2022-08-31 00:00:00",
                    store_id: 1,
                },
                {
                    entity_id: "12",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-WB03",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:56",
                    updated_at: "2022-08-31 18:09:56",
                    description:
                        "<p>School books, camp gear and yoga clothes get along just fine in the all-purpose Driven Backpack. Crafted with tough polyester ripstop fabric, it's outfitted with rubberized end panels and padded, adjustable shoulder straps. The roomy main compartment features molded foam pockets that host everything you need.</p>\n<ul>\n<li>Large main and small zip compartments.</li>\n<li>Adjustable, padded straps.</li>\n<li>Interior foam pockets.</li>\n<li>Exterior zip compartment.</li>\n<li>Left sport bottle pocket.</li>\n<li>Survival gear sold separately.</li>\n</ul>",
                    activity: "11,20,8",
                    style_bags: "24,28,29",
                    material: "36,37,38",
                    strap_bags: "61,64,65",
                    features_bags: "71,72,75,78",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    price: "36.000000",
                    name: "Driven Backpack",
                    image: "/w/b/wb03-purple-0.jpg",
                    small_image: "/w/b/wb03-purple-0.jpg",
                    thumbnail: "/w/b/wb03-purple-0.jpg",
                    options_container: "container2",
                    url_key: "driven-backpack",
                    msrp_display_actual_price_type: "0",
                    store_id: 1,
                },
                {
                    entity_id: "13",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-WB07",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:56",
                    updated_at: "2022-08-31 18:09:56",
                    description:
                        '<p>For long weekends away, camping outings and business trips, the Overnight Duffle can\'t be beat. The dual handles make it a cinch to carry, while the durable waterproof exterior helps you worry less about the weather. With multiple organizational pockets inside and out, it\'s the perfect travel companion.</p>\n<ul>\n<li>Dual top handles.</li>\n<li>W 15" x H 15" x D 9".</li>\n</ul>',
                    activity: "19,22",
                    style_bags: "26",
                    material: "35,37,38",
                    strap_bags: "64",
                    features_bags: "74,79",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    new: "1",
                    price: "45.000000",
                    name: "Overnight Duffle",
                    image: "/w/b/wb07-brown-0.jpg",
                    small_image: "/w/b/wb07-brown-0.jpg",
                    thumbnail: "/w/b/wb07-brown-0.jpg",
                    options_container: "container2",
                    url_key: "overnight-duffle",
                    msrp_display_actual_price_type: "0",
                    store_id: 1,
                },
                {
                    entity_id: "14",
                    attribute_set_id: "15",
                    type_id: "simple",
                    sku: "24-WB04",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:56",
                    updated_at: "2022-08-31 18:09:56",
                    description:
                        "<p>The name says so, but the Push It Messenger Bag is much more than a busy commuter's tote. It's a closet away from home when you're pedaling from class or work to gym and back or home again. It's the perfect size and shape for laptop, folded clothes, even extra shoes.</p>\n<ul>\n<li>Adjustable crossbody strap.</li>\n<li>Top handle.</li>\n<li>Zippered interior pocket.</li>\n<li>Secure clip closures.</li>\n<li>Durable fabric construction.</li>\n</ul>",
                    activity: "20,23,8",
                    style_bags: "27,28",
                    material: "37,38",
                    strap_bags: "61,62,63,65,66,67",
                    features_bags: "74,75,78,79",
                    status: "1",
                    visibility: "4",
                    tax_class_id: "2",
                    performance_fabric: "1",
                    price: "45.000000",
                    name: "Push It Messenger Bag",
                    image: "/w/b/wb04-blue-0.jpg",
                    small_image: "/w/b/wb04-blue-0.jpg",
                    thumbnail: "/w/b/wb04-blue-0.jpg",
                    options_container: "container2",
                    url_key: "push-it-messenger-bag",
                    msrp_display_actual_price_type: "0",
                    store_id: 1,
                },
                {
                    entity_id: "15",
                    attribute_set_id: "11",
                    type_id: "simple",
                    sku: "24-UG06",
                    has_options: "0",
                    required_options: "0",
                    created_at: "2022-08-31 18:09:56",
                    updated_at: "2022-09-15 01:35:22",
                    description:
                        "<p>You'll stay hydrated with ease with the Affirm Water Bottle by your side or in hand. Measurements on the outside help you keep track of how much you're drinking, while the screw-top lid prevents spills. A metal carabiner clip allows you to attach it to the outside of a backpack",
                },
            ],
        });
    }

    render() {
        const { actions } = this.props;
        const { films } = this.state;
        return (
            <Fragment>
                <div>
                    {/* <button
            onClick={() => {
              this.setState({ films: data });
            }}
          >
            Get item - right
          </button> */}
                    <button onClick={() => this.refreshList()}>
                        Get item - false
                    </button>
                </div>
                <div className="container">
                    {/* {films.map((film) => (
                        <Box
                            name={film.name}
                            price={film.price}
                            image={film.image}
                        />
                    ))} */}
                    <PaginatedItems itemsPerPage={8} items={films} />
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        films: state.getResultReducer.films,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(GetResultActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetResult);
