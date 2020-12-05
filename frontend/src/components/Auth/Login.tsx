import React, { useState, useEffect } from 'react'
import { useStore } from '../../stores/store'
import { useHistory } from 'react-router-dom'

import { Row, Col, CardBody, Card, Container, Input } from 'reactstrap'

// Redux
import { Link } from 'react-router-dom'

// availity-reactstrap-validation

// actions

// import images
import profile from '../../assets/images/profile-img.png'
import logo from '../../assets/images/logo.svg'

export const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { userStore } = useStore()
    const onChangedName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const onChangedPass = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const history = useHistory()
    const token = localStorage.getItem('Token')

    const sendData = async () => {
        const data = {
            username: userName,
            password: password,
        }
        await userStore!.login(data, () => history.push('/dashboard'))
    }
    useEffect(() => {
        if (token) {
            history.push('/dashboard')
        }
    }, [])
    return (
        <>
            <div className="home-btn d-none d-sm-block">
                <Link to="/" className="text-dark">
                    <i className="fas fa-home h2"></i>
                </Link>
            </div>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="overflow-hidden">
                                <div className="bg-soft-primary">
                                    <Row>
                                        <Col className="col-7">
                                            <div className="text-primary p-4">
                                                <h5 className="text-primary">Welcome Back !</h5>
                                                <p>Sign in to continue to Skote.</p>
                                            </div>
                                        </Col>
                                        <Col className="col-5 align-self-end">
                                            <img src={profile} alt="" className="img-fluid" />
                                        </Col>
                                    </Row>
                                </div>
                                <CardBody className="pt-0">
                                    <div>
                                        <Link to="/">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img src={logo} alt="" className="rounded-circle" height="34" />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="p-2">
                                        <div className="form-horizontal">
                                            <div className="form-group">
                                                <Input
                                                    name="userName"
                                                    label="Username"
                                                    className="form-control"
                                                    placeholder="Enter username"
                                                    type="text"
                                                    value={userName}
                                                    onChange={onChangedName}
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <Input
                                                    name="password"
                                                    label="Password"
                                                    type="password"
                                                    required
                                                    placeholder="Enter Password"
                                                    value={password}
                                                    onChange={onChangedPass}
                                                />
                                            </div>

                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customControlInline"
                                                />
                                                <label className="custom-control-label" htmlFor="customControlInline">
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="mt-3">
                                                <button
                                                    className="btn btn-primary btn-block waves-effect waves-light"
                                                    onClick={sendData}
                                                >
                                                    Log In
                                                </button>
                                            </div>

                                            <div className="mt-4 text-center">
                                                <Link to="/forgot-password" className="text-muted">
                                                    <i className="mdi mdi-lock mr-1"></i> Forgot your password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>
                                    Don't have an account ?{' '}
                                    <Link to="register" className="font-weight-medium text-primary">
                                        {' '}
                                        Signup now{' '}
                                    </Link>{' '}
                                </p>
                                <p>
                                    © {new Date().getFullYear()} Skote. Crafted with{' '}
                                    <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
