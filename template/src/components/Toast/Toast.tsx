import React from 'react'
import { ArgsProps, NotificationInstance } from 'antd/es/notification/interface'
import './Toast.scss'

function open(customNotification: NotificationInstance, props: ArgsProps) {
  //duration: unset -> 5s, 0 or null -> auto disapear disable
  var duration = null
  if (props.hasOwnProperty('duration')) {
    duration = props.duration ?? 0
  } else {
    duration = 5
  }

  const defaultPlacement = 'bottomLeft'

  const durationStyle = {
    animationDuration: `${duration}s`,
  }

  switch (props.type) {
    case 'success':
      customNotification.success({
        ...props,
        duration: duration,
        placement: props.placement || defaultPlacement,
        className: props.className + ' toast-hover',
        description: (
          <>
            {props.description ?? ''}
            <div className={duration != 0 ? 'toast-hover' : ''}>
              {duration != 0 && (
                <div style={durationStyle} className="progress-bar success-pg-bar" />
              )}
            </div>
          </>
        ),
      })
      break
    case 'warning':
      customNotification.warning({
        ...props,
        duration: duration,
        placement: props.placement || defaultPlacement,
        className: props.className + ' toast-hover',
        description: (
          <>
            {props.description ?? ''}
            <div className={duration != 0 ? 'toast-hover' : ''}>
              {duration != 0 && (
                <div style={durationStyle} className="progress-bar warning-pg-bar" />
              )}
            </div>
          </>
        ),
      })
      break
    case 'error':
      customNotification.error({
        ...props,
        duration: duration,
        placement: props.placement || defaultPlacement,
        className: props.className + ' toast-hover',
        description: (
          <>
            {props.description ?? ''}
            <div className={duration != 0 ? 'toast-hover' : ''}>
              {duration != 0 && (
                <div style={durationStyle} className="progress-bar error-pg-bar" />
              )}
            </div>
          </>
        ),
      })
      break
    case 'info':
      customNotification.info({
        ...props,
        duration: duration,
        placement: props.placement || defaultPlacement,
        className: props.className + ' toast-hover',
        description: (
          <>
            {props.description ?? ''}
            <div className={duration != 0 ? 'toast-hover' : ''}>
              {duration != 0 && (
                <div style={durationStyle} className="progress-bar info-pg-bar" />
              )}
            </div>
          </>
        ),
      })
      break
    default:
      customNotification.open({
        ...props,
        duration: duration,
        placement: props.placement || defaultPlacement,
        className: props.className + ' toast-hover',
        description: (
          <>
            {props.description ?? ''}
            <div className={duration != 0 ? 'toast-hover' : ''}>
              {duration != 0 && (
                <div style={durationStyle} className="progress-bar text-pg-bar"></div>
              )}
            </div>
          </>
        ),
      })
      break
  }
}

function destroy(customNotification: NotificationInstance, key?: string) {
  key ? customNotification.destroy(key) : customNotification.destroy()
}

const displayedKeys = new Set<React.Key>()
function openOnce(
  customNotification: NotificationInstance,
  props: { key: React.Key } & Omit<ArgsProps, 'key'>,
) {
  const { key } = props

  if (displayedKeys.has(key)) return
  if (props.onClose) {
    console.error(
      'TODO: fix openOnce function to extend its functionality without overriding',
    )
    return
  }

  const extendedProps = {
    ...props,
    onClose: () => displayedKeys.delete(key),
  }
  displayedKeys.add(key)
  open(customNotification, extendedProps)
}

export default { open, destroy, openOnce }
