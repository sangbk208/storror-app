import videoList from '../../apis/VideoListApi';
import FETCH_VIDEOLISTS from './type.js';

export const fetchVideoLists = () => async dispatch => {
    const response = await videoList.get();
    console.log(response);
    dispatch({
        type: "FETCH_VIDEOLISTS",
        payload: response.data,
    });
}