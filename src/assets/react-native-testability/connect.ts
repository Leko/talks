import removeDiary from "usecases/removeDiary";
import Dashboard from "./components/Dashboard";
import getLatestDiary from "./selectors/getLatestDiary";

const mapStateToProps = state => ({
  diary: getLatestDiary(state)
});

const mapDispatchToProps = dispatch => ({
  onPressRemove(diary: Diary) {
    dispatch(removeDiary(diary);)
  }
});

connect(mapStateToProps, mapDispatchToProps)(Dashboard);
