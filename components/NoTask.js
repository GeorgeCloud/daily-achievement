export default function NoTask({ idx }){
  if (idx != 6){
    return (
      <div class="bg-white shadow-md shadow-slate-100 mb-3">
        <h2 class="text-center font-bold text-indigo-900/90 pt-3 pb-3">NO TASK</h2>
      </div>
    )
  } else {
    return (
      <div class="bg-white mb-3">
        <h2 class="text-center font-bold text-indigo-900/90 pt-3 pb-3">NO TASK</h2>
      </div>
    )
  }
}
