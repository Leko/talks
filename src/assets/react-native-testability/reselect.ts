import { createSelector, createStructuredSelector } from "reselect";
import { UserId, User } from "domain";

type State = {
  session: {
    userId: UserId;
  };
  entities: {
    users: {
      [id: string]: User;
    };
  };
};

const getLoggedInUser = (state): User | null => {
  const { entities, session } = state;
  if (!session.userId) {
    return null;
  }
  return entities[session.userId] || null;
};

const getLatestDiary = (user: User | null): Diary | null => {
  if (user === null) {
    return null;
  }

  return user.diaries.getLatest();
};

export default createSelector(getLoggedInUser, getLatestDiary);
