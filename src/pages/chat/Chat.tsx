import { useParams } from 'react-router-dom';

export default function Chat() {
   const { id } = useParams();
  return (
    <div>
      Chat Page {id}
    </div>
  )
}
