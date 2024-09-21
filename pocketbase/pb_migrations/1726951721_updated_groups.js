/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcs2g3vts76cf7n")

  collection.listRule = "users.id = @request.auth.id"
  collection.viewRule = "users.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcs2g3vts76cf7n")

  collection.listRule = "@collection.groupToUsers.groupId = id && @collection.groupToUsers.userId = @request.auth.id"
  collection.viewRule = "@collection.groupToUsers.groupId = id && @collection.groupToUsers.userId = @request.auth.id"

  return dao.saveCollection(collection)
})
