import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:5000/api/orders" });

const PlaceOrder = async (creator, orderItems, amount, groupId) => {
    await instance
        .post("/", {
            creator: creator,
            orderItems: orderItems,
            amount: amount,
            groupId: groupId,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response);
        });
    return;
};

const SearchOrder = async (id) => {
    const url = "/" + id;

    var order;

    await instance
        .get(url)
        .then(function (response) {
            console.log(response);
            console.log(response.data.orders);
            order = response.data.orders;
        })
        .catch(function (error) {
            console.log(error.response);
        });

    return order;
};

const SearchWhatIBought = async (id) => {
    const url = "/user/" + id;

    var order;

    await instance
        .get(url)
        .then(function (response) {
            console.log(response);
            console.log(response.data.orders);
            order = response.data.orders;
        })
        .catch(function (error) {
            console.log(error.response);
        });

    return order;
};

const changePaidStatus = async (id, status) => {
    const url = "/" + id;
    let order;

    await instance
        .patch(url, { payed: status })
        .then(function (response) {
            // console.log(response);
            // console.log(response.data);
            order = response.data;
        })
        .catch(function (error) {
            console.log(error.response);
        });

    return order;
};

export { PlaceOrder, SearchOrder, SearchWhatIBought, changePaidStatus };
