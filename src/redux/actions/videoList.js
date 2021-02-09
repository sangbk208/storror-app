import videoList from '../../apis/VideoListApi';
import { FETCH_VIDEOLISTS } from './typeActions';

export const fetchVideoLists = () => async dispatch => {
    const response = await videoList.get();
    dispatch({
        type: FETCH_VIDEOLISTS,
        payload: response.data,
    });
}