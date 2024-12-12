import { connect, ConnectOptions } from "mongoose";

export const dbConnect = () => {
    const url = "mongodb+srv://tankaghimire3:reactnodejs@cluster1.qjiq4d2.mongodb.net/project";

  connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log("connect successfully"),
    (error) => console.log(error)
  );
};
