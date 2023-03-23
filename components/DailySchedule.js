import NoTask from './NoTask'
import Task from './Task'


export default function DailySchedule({ tasks, idx }){
    const today = new Date();
    const currentDay = new Date(today);
    let taskAdded = false;

    currentDay.setDate(today.getDate() + idx);

    const dailySchedule = (
        <>
            <p key={idx} class="font-bold text-sm text-slate-400 mb-3">
                { currentDay.toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) }
            </p>

            {tasks.map(task => {
                return task.dates.map(timestamp => {
                    // Compare timestamp to currentDay
                    const weekDay = new Date(timestamp).getDate()

                    if (weekDay === currentDay.getDate()){
                        taskAdded = true
                        return (
                            <Task title={task.title} timestamp={timestamp} key={timestamp} />
                        )
                    }
                })
            })}
        </>
    )

    {if (taskAdded == true){
        return dailySchedule
    } else {
        return (
            <>
                <p key={idx} class="font-bold text-sm text-slate-400 mb-3">
                    { currentDay.toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) }
                </p>

                <NoTask idx={idx} />
            </>
        )
    }}
}
