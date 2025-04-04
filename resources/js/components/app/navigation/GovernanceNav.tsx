import { Link } from '@inertiajs/react';

export default function GovernanceNav() {
    // const { url } = usePage();
    const thisPaths = [
        { path: './#administration', name: 'Administration' },
        { path: './#board', name: 'Board of governors' },
        { path: './#management', name: 'Management' },
    ];

    return (
        <div className={'m-auto grid w-max grid-flow-col gap-2'}>
            {...thisPaths.map((path, i) => (
                <div>
                    <Link to={path.path} key={i}>
                        {path.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}
