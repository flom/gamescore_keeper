import uvicorn
from litestar import Litestar, get
from litestar.config.cors import CORSConfig


@get("/")
async def index() -> str:
    return "Hello, World!"


cors_config = CORSConfig(allow_origins=["fill_from_config"])
app = Litestar(route_handlers=[index], cors_config=cors_config)

if __name__ == "__main__":
    uvicorn.run("app:app", reload=True)
