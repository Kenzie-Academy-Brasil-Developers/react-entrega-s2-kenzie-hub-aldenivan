const Button = ({ children, whiteSchema, ...rest }) => {
  <buttun whiteSchema={whiteSchema} type="button" {...rest}>
    {children}
  </buttun>;
};

export default Button;
