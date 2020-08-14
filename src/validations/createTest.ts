import { Segments, Joi, celebrate } from 'celebrate';

export const createTest = celebrate({
  [Segments.BODY]: Joi.object({
    name: Joi.string().required(),
  }),
});
