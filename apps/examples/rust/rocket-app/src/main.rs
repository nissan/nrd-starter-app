#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Hello, world from Rocket, a web framework for Rust!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}