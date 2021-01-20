import request from './request'
import { API_PATH } from './path'

export const resMenusTree = data => request(API_PATH + 'menus/tree', data, 'GET')
