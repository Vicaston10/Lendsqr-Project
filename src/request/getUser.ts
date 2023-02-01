import { httpPrivate } from "../utils/http";

export const fetchUsers = async () => {
  try {
    const res = await httpPrivate.get(`/users`);
    console.log(res);
    return res.data;
  } catch (err: any) {
    console.log(err?.response?.data);
    console.log(err?.response?.data?.message);
    throw err;
  }
};

export const fetchSingleUser = async (userId: string) => {
  try {
    const res = await httpPrivate.get(`/users/${userId}`);
    // console.log(res);
    return res.data;
  } catch (err: any) {
    console.log(err?.response?.data);
    console.log(err?.response?.data?.message);
    throw err;
  }
};
