import { HoverAction } from '@components/actions';

function SplashPageButton(props) {
  return (
    <div className="w-1/3 px-10">
      <HoverAction animationParams={{ scale: 1.1 }}>
        <div
          className="flex justify-center items-center content-start bg-gray-400 h-44 px-1 rounded-lg"
        >
          <div className="text-gray-900 font-sans text-3xl font-medium">
            {props.children}
          </div>
        </div>
      </HoverAction>
    </div>
  )
}
export { SplashPageButton }
