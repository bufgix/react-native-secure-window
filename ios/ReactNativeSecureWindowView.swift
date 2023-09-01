import ExpoModulesCore
import ScreenshotPreventing

// This view will be used as a native component. Make sure to inherit from `ExpoView`
// to apply the proper styling (e.g. border radius and shadows).
class ReactNativeSecureWindowView: ExpoView {
    let stack = UIStackView()
    lazy var container = ScreenshotPreventingView(contentView: stack)
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        clipsToBounds = true
        addSubview(container)
    }
    
    override func layoutSubviews() {
        container.frame = bounds
        stack.frame = bounds
    }
    
    override func didUpdateReactSubviews() {
        let subViews = self.reactSubviews()
        // hide all children
        subViews?.forEach {
            contentToBeHidden in
            stack.addSubview(contentToBeHidden)
        }
        
    }
}
