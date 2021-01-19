import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:5000/api/groups" });

const CreateGroup = async (leader, shop, description) => {
    console.log(leader);
    await instance
        .post("/", {
            leader: leader,
            shop: shop,
            description: description,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response);
        });
    return;
};

const CheckGroup = async () => {
    var groups;

    await instance
        .get("/")
        .then(function (response) {
            console.log(response);
            console.log(response.data);
            groups = response.data.groups;
        })
        .catch(function (error) {
            console.log(error.response);
        });

    return groups;
};

const CheckMyGroup = async (id) => {
    var groups;
    const url = "/users/" + id;
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
};

const ChangeStatus = async (id,status) => {
    const url = "/" + id
    await instance
        .patch(url, {
            status : status
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.response);
        });
    return;
}

export { CreateGroup, CheckGroup, CheckMyGroup, ChangeStatus };
