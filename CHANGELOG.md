# Changelog

## 0.0.7
- bugfix: catch all cases where the node doesn't have `querySelectorAll`

## 0.0.6
- bugfix: don't try to run `querySelectorAll` on string nodes

## 0.0.5
- minor performance and code clarity improvements

## 0.0.4
- improve performance by only searching the added nodes and their child nodes instead of the entire document

## 0.0.3
- significantly improve performance by only checking for nodes to remove if nodes were added

## 0.0.2
- Add changelog
- Remove initial run pre MutationObserver, which doesn't find elements because the main Discord app hasn't mounted yet

## 0.0.1
- Initial release