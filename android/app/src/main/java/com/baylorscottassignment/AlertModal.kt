package com.baylorscottassignment

import android.app.AlertDialog
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class AlertModal(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "AlertModal"

    @ReactMethod
    fun showConfirmationDialog(title: String, message: String, callback: Callback) {
        val currentActivity = currentActivity
        if (currentActivity != null) {
            AlertDialog.Builder(currentActivity)
                .setTitle(title)
                .setMessage(message)
                .setNegativeButton("Cancel") { dialog, _ ->
                    dialog.dismiss()
                    callback.invoke(false, "Deletion canceled")
                }
                .setPositiveButton("Delete") { _, _ ->
                    // Resolve the promise with a success message
                    callback.invoke(true, "Deletion successful")
                }
                .show()
        } else {
            callback.invoke(false, "Activity Error: Unable to access current activity")
        }
    }
}