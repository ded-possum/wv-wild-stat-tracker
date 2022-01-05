


return (
    <>
        
    <div className="stat">
        <div className="stat__goal">Goals: {totalGoals()}</div>
        <Meter
        type="circle" margin="medium" max={totalGoals()} size="small" thickness="large" values={[{
            value: totalGoals(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        />
        <div className="stat__assist">Assists: {totalAssists()}</div>
        <Meter
        type="circle" margin="medium" max={totalAssists()} size="small" thickness="large" values={[{
            value: totalAssists(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        />
        <div className="stat__save">Saves: {totalSaves()}</div>
        <Meter
        type="circle" margin="medium" max={totalSaves()} size="small" thickness="large" values={[{
            value: totalSaves(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        />
        {/* <div className="stat__against">Goals Against: {totalGoalsAgainst()}</div>
        <Meter
        type="circle" margin="medium" max={totalGoalsAgainst()} size="small" thickness="large" values={[{
            value: totalGoalsAgainst(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        /> */}
        <div className="stat__penalties">Penalty Minutes: {totalPenalties()}</div>
        <Meter
        type="circle" margin="medium" max={totalPenalties()} size="small" thickness="large" values={[{
            value: totalPenalties(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        />
    </div>
    </>