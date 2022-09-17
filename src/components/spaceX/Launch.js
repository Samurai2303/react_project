

export function Launch(props) {
    let {launch} = props;

    return(
        <div>
            <h2>Mission name - {launch.mission_name}</h2>
            <p>Launch year - {launch.launch_year} <br/>
                Mission patch - <a href={launch.links.mission_patch_small}>{launch.links.mission_patch_small}</a></p>
        </div>
    )
}