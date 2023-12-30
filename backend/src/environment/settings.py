from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


env_file = (Path(__file__).parent / ".env").__str__()


class Settings(BaseSettings):
    db_file: str

    model_config = SettingsConfigDict(env_file=env_file, env_file_encoding="utf-8")
