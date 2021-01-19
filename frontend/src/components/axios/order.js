import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:5000/api/orders" });

const PlaceOrder = async (creator, orderItems, amount,groupId) => {
    
    await instance
        .post("/", {
            creator:creator,
            orderItems:orderItems,
            amount:amount,
            groupId:groupId
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
    /*
    var groups;
    const url = "/users/" + id
    await instance
        .get(url)
        .then(function (response) {
            console.log(response);
            console.log(response.data);
            groups = response.data.groups;
        })
        .catch(function (error) {
            console.log(error.response);
        });

    return groups;
    */
    
};

export { PlaceOrder,SearchOrder };
