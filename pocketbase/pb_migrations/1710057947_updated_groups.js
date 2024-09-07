/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcs2g3vts76cf7n")

  collection.listRule = "groupToUsers_via_groupId.groupId = id && groupToUsers_via_groupId.userId = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcs2g3vts76cf7n")

  collection.listRule = "@request.auth.id != \"\" && groupToUsers_via_groupId.groupId = id && groupToUsers_via_groupId.userId = @request.auth.id"

  return dao.saveCollection(collection)
})
