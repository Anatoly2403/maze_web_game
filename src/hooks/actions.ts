import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { mazeActions } from "../store/slices";

const actions = {
  ...mazeActions,
};

export const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
