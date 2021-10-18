import { Host } from '../../types/types';
import Image from '../common/img-avatar';
import UserName from '../common/user-name';

type HostessProps = {
  host: Host,
  description: string,
  uniqUrl: number,
}

function Hostess({ host, description, uniqUrl }: HostessProps): JSX.Element {
  const { isPro, avatarUrl, name } = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={ `${isPro && 'property__avatar-wrapper--pro'} property__avatar-wrapper user__avatar-wrapper` }>

          <Image avatarUrl={ avatarUrl } uniqUrl={ uniqUrl } />

        </div>

        <UserName name={ name } uniqUrl={ uniqUrl } />

        { isPro && <span className="property__user-status">Pro</span> }
      </div>
      <div className="property__description">
        <p className="property__text">
          { description }
        </p>
      </div>
    </div>
  );
}

export default Hostess;
