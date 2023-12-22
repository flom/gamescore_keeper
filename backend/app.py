from litestar import Litestar, get


@get("/")
async def index() -> str:
    return "Hello, World! foobar"


app = Litestar([index])
