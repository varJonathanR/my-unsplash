import { app, PORT } from "./app.js";

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`);
});
