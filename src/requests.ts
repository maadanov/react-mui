import axios from "axios";

export const getEmployee = () => {
  return axios("http://localhost:8000/workers")
    .then((res) => res.data)
    .catch((e) => e);
};

export const changeData = (id: number, obj: any) => {
  return axios
    .put(`http://localhost:8000/workers/${id}`, obj)
    .then(() => console.log("asdasdas"));
};
