import Genders from './Genders';
import ID from './ID';
import Lesson from './Lesson';
import Roles from './Roles';

interface User {
  readonly googleId: ID
  name: string
  picture?: string
  role: Roles
  gender?: Genders
  lessons?: Array<Lesson['id']>
}

export default User;
