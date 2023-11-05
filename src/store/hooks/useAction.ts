import { useDispatch } from "react-redux";
import { actions } from "../actions";
import { bindActionCreators } from "redux";

export const useAction = () => {
   const dispatch = useDispatch();
   return bindActionCreators(actions, dispatch);
};