import cx from 'classnames'
import { useMemo } from 'react'

import { ButtonVariantTypes, Input } from '../../../types'
import { useFormData } from '../../FormDataProvider'
import { usePopup } from '../../PopupProvider'
import { PopupType } from '../../PopupProvider/PopupProvider'
import { useQuestionnaire } from '../../QuestionnaireProvider'
import { Button } from '..'

interface Props {
  input: Input
}

export default function ItemRepeatButtons({
  input
}: Props): JSX.Element | null {
  const { addRepeatableItem, deleteRepeatableItem } = useQuestionnaire()
  const { getFormValue, setFormValue } = useFormData()
  const { callPopup } = usePopup()

  const baseId = useMemo(() => {
    return (
      (input.linkIdWithParent || '').split('.').slice(0, -1).join('.') ||
      input.linkIdWithParent ||
      ''
    )
  }, [input.linkIdWithParent])
  const baseValue = getFormValue(baseId)

  if (baseValue === undefined) return null

  function addRepeatItem() {
    addRepeatableItem(input.questionnairePosition || '')
  }

  function removeRepeatItem() {
    callPopup({
      message: 'Are you sure you want to delete this entry?',
      confirmButtonText: 'Confirm',
      dismissButtonText: 'Dismiss',
      onConfirm: () => {
        // Delete in the array and call the questionnaire function
        setFormValue(baseId, [
          ...baseValue.slice(0, input.indexRepeat),
          ...baseValue.slice((input.indexRepeat || 0) + 1)
        ])
        deleteRepeatableItem(input.questionnairePosition || '')
      },
      type: PopupType.confirmation
    })
  }

  const classNames = cx('margin-top-2', {
    'margin-bottom-6': (input.indexRepeat || 0) > 0
  })

  return (
    <div className={classNames}>
      {input.indexRepeat === baseValue.length - 1 && (
        <Button
          className={(input.indexRepeat || 0) > 0 ? 'margin-right-4' : ''}
          onClick={addRepeatItem}
          type='button'
          variant={ButtonVariantTypes.primary}
        >
          Add
        </Button>
      )}
      {(input.indexRepeat || 0) > 0 && (
        <Button
          onClick={removeRepeatItem}
          type='button'
          variant={ButtonVariantTypes.delete}
        >
          Delete
        </Button>
      )}
    </div>
  )
}
