import ID from './ID';

interface TeachSubject {
  readonly id: ID
  name: string
  color: string
  description?: string
}

export default TeachSubject;
