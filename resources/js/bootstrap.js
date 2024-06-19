import axios from "axios";
window.axios = axios;
// vapor
import Vapor from "laravel-vapor";
window.Vapor = Vapor;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
