export interface NoteLinkProps {
    user:string, logo: string
  }

export const Header :React.FC<NoteLinkProps> = ({user, logo}) => {
  return <>
  {user}
  {logo}
  </>;
};
