/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export default function Emblems({ achievements }) {
  return (
    <div className="flex flex-col border-2 items-center p-6 rounded-lg grow-[1] dark:border-zinc-600">
      <span>Emblemas:</span>
      <div className="grid grid-cols-4 gap-8 mt-4 items-center text-4xl">
        <span>{achievements.projectsDone}</span>
        <span>{achievements.leadership}</span>
        <span>{achievements.dedication}</span>
        <span>{achievements.colaborator}</span>
        <span>{achievements.compromise}</span>
        <span>{achievements.creativity}</span>
        <span>{achievements.growth}</span>
        <span>{achievements.postsCreated}</span>
        <span>{achievements.postsLiked}</span>
      </div>
    </div>
  );
}
