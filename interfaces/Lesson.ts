import ID from './ID';
import User from './User';

interface Lesson {
  readonly id: ID
  name: string
  description?: string
  users: User[]
  password: string
}

export default Lesson;
