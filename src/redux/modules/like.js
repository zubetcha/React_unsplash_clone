import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { apis } from '../../shared/api'

/* Action type */
const CLICK_LIKE = 'CLICK_LIKE'
