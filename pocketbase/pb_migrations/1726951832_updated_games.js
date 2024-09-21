/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mf4qeid35eli2tj")

  collection.viewRule = "@request.auth.id != \"\" && groups_via_games.users.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mf4qeid35eli2tj")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
