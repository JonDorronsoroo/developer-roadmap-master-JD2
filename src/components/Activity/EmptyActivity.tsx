import CheckIcon from '../../icons/roadmap.svg';

export function EmptyActivity() {
  return (
    <div class="rounded-md">
      <div class="flex flex-col items-center p-7 text-center">
        <img
          alt="no roadmaps"
          src={CheckIcon}
          class="mb-2 w-[60px] h-[60px] sm:h-[120px] sm:w-[120px] opacity-10"
        />
        <h2 class="text-lg sm:text-xl font-bold">No Progress</h2>
        <p className="my-1 sm:my-2 max-w-[400px] text-gray-500 text-sm sm:text-base">
          Progress will appear here as you start tracking your{' '}
          <a href="/roadmaps" class="mt-4 text-blue-500 hover:underline">
            Roadmaps
          </a>{' '}
          or{' '}
          <a href="/organigrama" class="mt-4 text-blue-500 hover:underline">
          Organigrama
          </a>{' '}
          progress.
        </p>
      </div>
    </div>
  );
}
