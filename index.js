import cx from 'classnames'

const makeBlockStyles = ({
  active,
  block,
  className,
  disabled,
  hidden,
  loading,
  modifier,
  ...props
}) => ({
  className: cx(block, {
    [`${block}--${modifier}`]: block && modifier,
    [`${className}`]: className,
    'is-active': active,
    'is-disabled': disabled,
    'is-hidden': hidden,
    'is-loading': loading
  }),
  ...props
})

export default (block) => ({ element, ...props }) => {
  if (element) {
    return makeBlockStyles({ block: `${block}__${element}`, ...props })
  }
  return makeBlockStyles({ block, ...props })
}
