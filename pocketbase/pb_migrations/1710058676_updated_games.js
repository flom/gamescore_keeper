/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mf4qeid35eli2tj")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mf4qeid35eli2tj")

  collection.listRule = "@collection.groupToUsers.groupId = id && @collection.groupToUsers.userId = @request.auth.id"
  collection.viewRule = "@collection.groupToUsers.groupId = id && @collection.groupToUsers.userId = @request.auth.id"

  return dao.saveCollection(collection)
})
