/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrd3f6s4c3eemzh")

  collection.viewRule = "@request.auth.id != \"\" && groups_via_players.players.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrd3f6s4c3eemzh")

  collection.viewRule = "@request.auth.id != \"\" "

  return dao.saveCollection(collection)
})
