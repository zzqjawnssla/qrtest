package com.qrtest

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // Add this import
import com.facebook.react.ReactRootView // Add this import ChatGpt

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "qrtest"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */

   /**
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
      */

      override fun createReactActivityDelegate(): ReactActivityDelegate =
      object : DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled) {
      override fun createRootView(): ReactRootView {
      return RNGestureHandlerEnabledRootView(this@MainActivity)
      }
      }
      }
/*DefaultReactActivityDelegate를 익명 클래스(object)로 확장하여 createRootView 메서드를 오버라이드합니다.
RNGestureHandlerEnabledRootView를 createRootView 메서드에서 반환하도록 합니다.*/

