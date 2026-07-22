package core

type BenzokolonkaError struct {
	IsBenzokolonkaError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBenzokolonkaError(code string, msg string, ctx *Context) *BenzokolonkaError {
	return &BenzokolonkaError{
		IsBenzokolonkaError: true,
		Sdk:              "Benzokolonka",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BenzokolonkaError) Error() string {
	return e.Msg
}
