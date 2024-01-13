import Router from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/schedules", "/pages/schedules.html")
router.add("/services", "/pages/services.html")
router.add("/products", "/pages/products.html")
router.add("/professionals", "/pages/professionals.html")
router.add("/profile", "/pages/profile.html")
router.add("/cart", "/pages/cart.html")
router.add("/about", "/pages/about.html")
router.add(404, "/pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()